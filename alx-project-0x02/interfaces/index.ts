export interface CardProps {
  title: string;
  content: string;
}

export interface UserProps{
    id: string;
    title: string;
    content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}