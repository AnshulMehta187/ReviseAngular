import { SidenavLink } from './sidenav-link.model';

export interface SidenavItem extends SidenavLink {
  id: number;
  icon?: string;
  children: SidenavItem[];
  isOpen?: boolean;
}