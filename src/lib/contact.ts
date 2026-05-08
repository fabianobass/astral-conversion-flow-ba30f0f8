export const PHONE_SALES = "5541996366543";
export const PHONE_MAINTENANCE = "5541991945563";
export const PHONE_SALES_DISPLAY = "(41) 99636-6543";
export const PHONE_MAINTENANCE_DISPLAY = "(41) 99194-5563";

export const waLink = (phone: string = PHONE_SALES, text: string = "Vim pelo Google do site da Astral Gás e gostaria de um orçamento.") =>
  `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
