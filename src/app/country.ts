export class Country {
  constructor(
    public id: string,
    title: string,
    countryArea: number,
    population: number,
    officialLanguages: Array<string>,
    flagUrl: string,
    capitalCity: string
  ) {}
}
