interface CompanyData {
  year?: number;
  title?: string;
  isInput?: boolean;
  slug: string;
  formula?: string;
  input?: string;
  value?: string;
  class?: string;
}

interface IResponse {
  data: CompanyData[];
}
