export interface CardProps {
  title: string;
  content: string;
}

export interface UserProps {
  userID?: number;
  title: string;
  content: string;
}

export interface UserApiData extends UserProps {
  name: string;
  email: string;
  address: {
    street: string;
  };
}
export interface PostModalProps {
  onSubmit: (post: UserProps) => void;
  onClose: () => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}
