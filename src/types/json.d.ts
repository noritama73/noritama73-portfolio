declare module "*/profile.json" {
  interface Profile {
    Year: number;
    caption: string;
  }
  const value: Profile;
  export = value;
}

declare module "*/skillset.json" {
  interface SkillSet {
    Name: string;
    Progress: number;
    caption: string;
  }
  const value: SkillSet;
  export = value;
}
