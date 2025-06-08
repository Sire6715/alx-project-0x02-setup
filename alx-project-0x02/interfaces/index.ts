export interface CardProps {
  title: string;
  content: string;
}

export interface UserProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (post: UserProps) => void;
  onClose: () => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}


