import type { VirusSection } from "@/entities/virus"
import { Malware } from "./malware";
import { Phishing } from "./pishing";

export const virusList: VirusSection[] = [Phishing, Malware];