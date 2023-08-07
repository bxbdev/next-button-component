import type { NextPage } from "next"
import Button, { ColorProps } from "@/components/button"
import { useTheme } from "styled-components"
import { MdShoppingCartCheckout, MdOutlineCalendarMonth } from "react-icons/md";

const Home: NextPage = () => {
  const theme = useTheme()

  return (
    <main className="grid gap-20 items-top px-24 py-10">
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-3xl text-gray-700 font-semibold">Default buttons</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
          <Button
            color="primary"
            startIcon={<MdShoppingCartCheckout className="text-xl" />}
            onClick={() => console.log("You clicked danger")}
          >
            Cart
          </Button>
          <Button
            color="primary"
            endIcon={<MdOutlineCalendarMonth className="text-xl" />}
            onClick={() => console.log("You clicked danger")}
          >
            Schedule
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <h1 className="text-3xl text-gray-700 font-semibold">Outline buttons</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            variant="outline"
            color="default"
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            variant="outline"
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 ">
        <h1 className="text-3xl text-gray-700 font-semibold">Text buttons</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            variant="text"
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            variant="text"
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 ">
        <h1 className="text-3xl text-gray-700 font-semibold">Button sizes</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            size="sm"
            color="primary"
            onClick={() => console.log("You clicked default")}
          >
            Small
          </Button>
          <Button
            size="md"
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Medium
          </Button>
          <Button
            size="lg"
            color="primary"
            onClick={() => console.log("You clicked secondary")}
          >
            Large
          </Button>
        </div>
      </section>


      <section className="flex flex-col items-center gap-6 ">

        <h1 className="text-3xl text-gray-700 font-semibold">Disable shadow</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            disableShadow
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            disableShadow
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            disableShadow
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            disableShadow
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>


      <section className="flex flex-col items-center gap-6">
        <h1 className="text-3xl text-gray-700 font-semibold">Disabled buttons</h1>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            disabled
            color="default"
          >
            Default
          </Button>
          <Button
            disabled
            color="primary"
          >
            Primary
          </Button>
          <Button
            disabled
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            disabled
            color="danger"
          >
            Danger
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <Button
            variant="outline"
            disabled
          >
            Default
          </Button>
          <Button
            variant="outline"
            disabled
            color="primary"
          >
            Primary
          </Button>
          <Button
            variant="outline"
            disabled
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            disabled
            color="danger"
          >
            Danger
          </Button>
        </div>


        <div className="flex flex-wrap items-center gap-8">
          <Button
            variant="text"
            disabled
          >
            Text
          </Button>
          <Button
            variant="text"
            disabled
            color="primary"
          >
            Text
          </Button>
          <Button
            variant="text"
            disabled
            color="secondary"
          >
            Text
          </Button>
          <Button
            variant="text"
            disabled
            color="danger"
          >
            Text
          </Button>
        </div>
        
      </section>

      

    </main>
  )
}

export default Home