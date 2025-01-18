export interface IJobFilters {
    employmentTypes: string[]
    seniority?: string
    language?: string
  }
  
  export interface Job {
    company: string
    title: string
    location: string
    type: string
    timeAgo: string
    isNew?: boolean
    isFeatured?: boolean
  }
  
  export interface EmploymentType {
    id: string
    label: string
    count: number
  }
  
  