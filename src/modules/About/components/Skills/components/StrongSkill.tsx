import CardSkill from './CardSkill';

const skillItens: Action[] = [
  { nameSkill: 'HMTL' },
  { nameSkill: 'CSS' },
  { nameSkill: 'GIT' },
  { nameSkill: 'TEAM WORK' },
  { nameSkill: 'AGILE METODOLOGIES' }
];

export interface Action {
  nameSkill: string;
}

const StrongSkill = () => {
  return (
    <div className="flex flex-col gap-3 items-start sm:items-center">
      <div>
        <p className="font-bold text-base text-white">Strong</p>
      </div>
      <div className="flex flex-col">
        <CardSkill skillItens={skillItens} />
      </div>
    </div>
  );
};

export default StrongSkill;
