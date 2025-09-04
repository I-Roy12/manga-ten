export type Work = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  category: 'AI軍' | '人間軍' | 'コラボ';
};

export const works: Work[] = [
  { id: 1, title: 'AIが描いた未来都市', author: 'AI-001', imageUrl: 'https://placehold.co/300x400/4F46E5/FFFFFF?text=AI+1', category: 'AI軍' },
  { id: 2, title: '人間の情熱', author: '田中太郎', imageUrl: 'https://placehold.co/300x400/DC2626/FFFFFF?text=人間+1', category: '人間軍' },
  { id: 3, title: '機械の心', author: 'AI-002', imageUrl: 'https://placehold.co/300x400/7C3AED/FFFFFF?text=AI+2', category: 'AI軍' },
  { id: 4, title: '手描きの温かみ', author: '佐藤花子', imageUrl: 'https://placehold.co/300x400/059669/FFFFFF?text=人間+2', category: '人間軍' },
  { id: 5, title: 'デジタルワールド', author: 'AI-003', imageUrl: 'https://placehold.co/300x400/EA580C/FFFFFF?text=AI+3', category: 'AI軍' },
  { id: 6, title: '伝統の技', author: '鈴木一郎', imageUrl: 'https://placehold.co/300x400/16A34A/FFFFFF?text=人間+3', category: '人間軍' },
  { id: 7, title: 'サイバーパンク', author: 'AI-004', imageUrl: 'https://placehold.co/300x400/9333EA/FFFFFF?text=AI+4', category: 'AI軍' },
  { id: 8, title: '心の物語', author: '高橋美咲', imageUrl: 'https://placehold.co/300x400/DC2626/FFFFFF?text=人間+4', category: '人間軍' },
  { id: 9, title: '最強の対決', author: 'AI vs 人間', imageUrl: 'https://placehold.co/300x400/EA580C/FFFFFF?text=対決+1', category: 'コラボ' },
  { id: 10, title: '新しい時代', author: 'コラボ作品', imageUrl: 'https://placehold.co/300x400/16A34A/FFFFFF?text=コラボ+2', category: 'コラボ' },
  { id: 11, title: 'クリエイター集団', author: 'チーム制作', imageUrl: 'https://placehold.co/300x400/9333EA/FFFFFF?text=チーム+1', category: 'コラボ' },
  { id: 12, title: '未来への挑戦', author: '革新プロジェクト', imageUrl: 'https://placehold.co/300x400/DC2626/FFFFFF?text=挑戦+1', category: 'コラボ' },
];
