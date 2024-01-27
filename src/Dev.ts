export type Dev = {
    name: string,
    title: string,
    birth_date: Date,
    contact: {
        email: string,
        github: string,
        gitlab: string,
        linkedin: string,
        stackoverflow: string,
    },
    brief: string,
    resume: {
        formation: {
            school_name: string,
            course: string,
            start_year: number,
            end_year: number | null;
        }[],
        experience: {
            company_name: string,
            description: string,
            activities: string,
            start_year: number,
            end_year: number | null;
        }[],
    },
    skills: {
        description: string,
        list: {
            name: string,
            main: boolean;
        }[];
    }[],
    languages: {
        name: string,
        read: number,
        write: number,
        listen: number,
        speak: number;
    }[],
    portfolio: {
        url: string,
        image_url: string,
        name: string,
        description: string,
        techs: string[];
    }[];
}
