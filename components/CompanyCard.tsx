export default function CompanyCard({children, title, description}: {children: JSX.Element, title: string, description: string}) {
  return (
    <div className="flex flex-col items-center grow shrink basis-0 justify-evenly bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 p-4 mx-4">
      {children}
      <div className="flex flex-col justify-between ml-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-64 overflow-scroll">{description}</p>
      </div>
    </div>
  )
}
