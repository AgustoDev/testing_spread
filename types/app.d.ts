interface CompanyData {
  year?: number;
  title?: string;
  isInput?: boolean;
  slug: string;
  formula?: string;
  input?: string;
  value?: number;
  class?: string;
}

interface IResponse {
  data: CompanyData[];
}
