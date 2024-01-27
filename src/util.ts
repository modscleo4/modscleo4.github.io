import { Dev } from "./Dev";

export function formatPhone(phone: string) {
    const { CountryCode, DDD, P1, P2 } = /(?<CountryCode>[\d]{2})(?<DDD>[\d]{2})9(?<P1>[\d]{4})(?<P2>[\d]{4})/gm.exec(phone)?.groups ?? {};
    return `+${CountryCode} (${DDD}) 9${P1}-${P2}`;
}

export function languageLevel(i: number) {
    return ['Básico', 'Intermediário', 'Avançado', 'Fluente'][i];
}

export function techs(dev: Dev) {
    return dev.skills.reduce((a: string[], s) => a.concat(s.list.map(v => v.name)), []);
}
