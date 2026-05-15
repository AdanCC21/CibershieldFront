import type { VirusSection } from "@/entities/virus"
import { Malware } from "./malware";
import { Phishing } from "./phishing";


export const virusList: VirusSection[] = [Phishing, Malware];