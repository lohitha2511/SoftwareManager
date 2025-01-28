function FeatureCard({ name, description, icon: Icon }) {
  return (
    <div
      className="group relative flex flex-col p-6 bg-white rounded-2xl border border-gray-200 
        shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 
        hover:-translate-y-1"
    >
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <Icon
          className="h-5 w-5 flex-none text-indigo-600 group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
      </dd>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-50/20 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
      />
    </div>
  );
}

export default FeatureCard;
