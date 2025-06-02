import {
  LucideProps,
  Building,
  Building2,
  Camera,
  Check,
  Clock,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  Send,
  Ship,
  User,
  Users,
  CircleAlert,
} from "lucide-react";

export interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Building,
  Building2,
  Camera,
  Check,
  Clock,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Plane,
  Send,
  Ship,
  User,
  Users,
  CircleAlert,
};

export default function Icon({
  name,
  fallback = "CircleAlert",
  ...props
}: IconProps) {
  const IconComponent = iconMap[name] || iconMap[fallback];
  return <IconComponent {...props} />;
}
