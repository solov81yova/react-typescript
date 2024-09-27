export interface SimpsonsCardProps {
  firstName: string;
  lastName: string;
  avatar: undefined | string;
  job: string;
  hobby?: string;
  getSimpsonName: () => void;
}
