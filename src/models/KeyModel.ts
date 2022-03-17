export interface IKey {
  id: number;
  type: string;
  content: string;
}

export interface IKeyProps {
  action: string;
  content: string;
  onClick: () => void;
}
