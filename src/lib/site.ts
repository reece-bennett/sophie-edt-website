export const site = {
  name: "Sophie Bennett Equine Dentistry",
  shortName: "Sophie Bennett EDT",
  phone: "07946524228",
  phoneDisplay: "07946 524228",
  email: "info@sophiebennettEDT.co.uk",
  whatsappNumber: "447946524228", // intl format for wa.me
  area: "Gloucestershire & surrounding counties",
  credentials: "BAEDT • BEVA/BVDA Qualified Equine Dentist",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
