import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string;
}

function NavButton({ to, label }: NavButtonProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 ${
          isActive
            ? 'bg-primary text-white shadow-soft'
            : 'bg-soft text-[#2f3870] hover:-translate-y-0.5 hover:bg-secondary hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export { NavButton };
