import Spread from '~/components/spread';

export const loader = () => {
  return { spreadData: [], company: { name: 'Agusto Test', slug: 'agusto_test' } };
};

export type CompanyLoader = ReturnType<typeof loader>;

export default function Index() {
  return (
    <div className="flex gap-6 p-10">
      <Spread />
    </div>
  );
}
