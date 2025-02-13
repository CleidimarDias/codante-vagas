export type job = {
    id: string,
    title: string,
    company: string,
    city: string,
    salary: number,
    company_website: string,
    schedule: "parte-time" | "full time",
    number_of_positions: number,
    description: string,
    requirements: string
}