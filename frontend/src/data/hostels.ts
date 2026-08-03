import type { Hostel } from "@/types";

export const hostels: Hostel[] = [
  { id: "h1", collegeId: "iitb", name: "Hostel 1" },
  { id: "h2", collegeId: "iitb", name: "Hostel 2" },
  { id: "h3", collegeId: "iitb", name: "Hostel 3" },
  { id: "h4", collegeId: "iitb", name: "Hostel 4" },
  { id: "h12", collegeId: "iitb", name: "Hostel 12" },
  { id: "h16", collegeId: "iitb", name: "Hostel 16" },
  { id: "kumaon", collegeId: "iitd", name: "Kumaon Hostel" },
  { id: "nilgiri", collegeId: "iitd", name: "Nilgiri Hostel" },
  { id: "aravali", collegeId: "iitd", name: "Aravali Hostel" },
  { id: "ganga", collegeId: "iitm", name: "Ganga Hostel" },
  { id: "krishna", collegeId: "iitm", name: "Krishna Hostel" },
  { id: "vyas", collegeId: "bits-pilani", name: "Vyas Bhawan" },
  { id: "ram", collegeId: "bits-pilani", name: "Ram Bhawan" },
  { id: "mens-a", collegeId: "vit", name: "Men's Hostel A Block" },
  { id: "ladies-a", collegeId: "vit", name: "Ladies Hostel A Block" },
];

export const hostelsByCollege = (collegeId: string) =>
  hostels.filter((h) => h.collegeId === collegeId);
