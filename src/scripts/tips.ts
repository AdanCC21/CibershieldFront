import { TipsList } from "@/constants/tips";
import type { CategoryType } from "@/entities/form.entity";
import type { TipEntity } from "@/entities/tip";

export function GetRandomTip(tipType: CategoryType, excludeId?: number): TipEntity | undefined {
  const filtered = TipsList.filter(t => t.tipType === tipType && t.id !== excludeId);
  if (filtered.length === 0) return undefined;
  return filtered[Math.floor(Math.random() * filtered.length)];
}