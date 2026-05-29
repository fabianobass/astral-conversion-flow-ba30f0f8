export const PHONE_SALES = "5541996620115";
export const PHONE_MAINTENANCE = "5541996620115";
export const PHONE_SALES_DISPLAY = "(41) 99662-0115";
export const PHONE_MAINTENANCE_DISPLAY = "(41) 99662-0115";

export const waLink = (phone: string = PHONE_SALES, text: string = "Olá! Vim pelo site da Astral Gás") =>
  `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

