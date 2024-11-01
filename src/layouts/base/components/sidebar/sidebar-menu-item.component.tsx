import { NavLink } from 'react-router-dom';

type SidebarMenuItemProps = {
  to: string;
  label: string;
};

export default function SidebarMenuItem({ to, label }: SidebarMenuItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'sidebar__menu-wrapper__menu-item__link active'
          : 'sidebar__menu-wrapper__menu-item__link'
      }
      to={to}
    >
      {label}
    </NavLink>
  );
}
