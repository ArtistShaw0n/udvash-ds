import { HomeScreen } from "@/components/screens/HomeScreen";
import { ProfileMenuPopup } from "@/components/screens/ProfileMenuPopup";

/* Figma V2 — Profile menu (1:11093 light / 1:11490 dark): Home + profile popup. */
export default function ProfilePage() {
  return <HomeScreen overlay={<ProfileMenuPopup />} />;
}
