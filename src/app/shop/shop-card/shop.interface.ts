export interface Shop {
  id: number;
  name: string;
  category: string;
  description?: string;
  whatsapp?: string;
  email?: string;
  location?: string;
  image?: string;
  updated_at?: Date;
  created_at?: Date;
  deactivated_at?: Date;
  active: boolean;
}