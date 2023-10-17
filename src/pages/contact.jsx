import Form from "@/components/Form"
import { EnvelopeIcon } from "@heroicons/react/24/outline"


const contact = () => {
  return (
    <div className="relative isolate min-h-screen ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 sm:pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-100">
              Contact
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Available for hire and eager to bring technical and creative skills to your team or project. Let's discuss how we can build something great together.
              </p>
              <div className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <div className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <a
                      className="hover:text-white"
                      href="mailto:jeanchaneto@gmail.com"
                    >
                      jeanchaneto@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
  )
}

export default contact