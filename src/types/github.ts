export  interface Repo{
    id:number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number ;
    language: string | null;
}