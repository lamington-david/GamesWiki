export const NOTES_KEY = 'gw:notes';

export interface NoteRecord {
  note: string;
  tags: string[];
  gameSlug: string;
  gameName: string;
  resourceTitle: string;
  resourceType: string;
  createdAt: number;
  updatedAt: number;
}

export type NotesStore = Record<string, NoteRecord>;

export function getNotes(): NotesStore {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY) || '{}'); }
  catch { return {}; }
}

export function getNote(url: string): NoteRecord | null {
  return getNotes()[url] ?? null;
}

export function saveNote(url: string, data: Omit<NoteRecord, 'tags' | 'createdAt' | 'updatedAt'>): void {
  const notes = getNotes();
  const existing = notes[url];
  notes[url] = {
    ...data,
    tags: extractTags(data.note),
    createdAt: existing?.createdAt ?? Date.now(),
    updatedAt: Date.now(),
  };
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  window.dispatchEvent(new Event('notes-changed'));
}

export function deleteNote(url: string): void {
  const notes = getNotes();
  delete notes[url];
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  window.dispatchEvent(new Event('notes-changed'));
}

export function extractTags(text: string): string[] {
  const matches = text.match(/#[a-zA-Z][a-zA-Z0-9-]*/g) ?? [];
  return [...new Set(matches.map(t => t.slice(1).toLowerCase()))];
}

export function getAllTags(notes: NotesStore): Record<string, number> {
  const counts: Record<string, number> = {};
  Object.values(notes).forEach(n => n.tags.forEach(t => { counts[t] = (counts[t] ?? 0) + 1; }));
  return counts;
}

export function formatForClaude(notes: NotesStore): string {
  const entries = Object.entries(notes).filter(([, n]) => n.note.trim());
  if (!entries.length) return 'No notes yet.';

  const byGame: Record<string, Array<[string, NoteRecord]>> = {};
  entries.forEach(([url, n]) => { (byGame[n.gameSlug] ??= []).push([url, n]); });

  const lines = ['My game design notes from GamesWiki:\n'];

  Object.values(byGame)
    .sort((a, b) => b.length - a.length)
    .forEach(gameNotes => {
      lines.push(`[${gameNotes[0][1].gameName}]`);
      gameNotes.forEach(([, n]) => {
        const tagStr = n.tags.length ? ' ' + n.tags.map(t => `#${t}`).join(' ') : '';
        lines.push(`• ${n.resourceTitle} (${n.resourceType.replace(/_/g, ' ')})`);
        lines.push(`  "${n.note.trim()}"${tagStr}`);
      });
      lines.push('');
    });

  const tagCounts = getAllTags(notes);
  const topTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  if (topTags.length) lines.push(`Tags: ${topTags.map(([t, c]) => `#${t} (${c})`).join(', ')}\n`);

  lines.push('What patterns do you notice across these notes? What design principles emerge?');
  return lines.join('\n');
}
