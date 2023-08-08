import type { NextPage } from "next"
import Button from "@/components/button"
import { MdShoppingCartCheckout, MdOutlineCalendarMonth, MdDeleteForever } from "react-icons/md";
import Title from "@/components/title"

const Home: NextPage = () => {

  return (
      <main className="grid gap-20 items-top px-24 py-10">
        <section className="flex flex-col items-center gap-6">
          <Title>Contained buttons</Title>
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
          </div>
        </section>

      <section className="flex flex-col items-center gap-6">
        <Title>Outline buttons</Title>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            $variant="outline"
            color="default"
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            $variant="outline"
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            $variant="outline"
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            $variant="outline"
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 ">
        <Title>Text buttons</Title>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            $variant="text"
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            $variant="text"
            color="primary"
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            $variant="text"
            color="secondary"
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            $variant="text"
            color="danger"
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>

        <section className="flex flex-col items-center gap-6 ">
          <Title>Button sizes</Title>
          <div className="flex flex-wrap items-center gap-8">
            <Button
              color="primary"
              size="sm"
              onClick={() => console.log("You clicked default")}
            >
              Small
            </Button>
            <Button
              color="primary"
              size="md"
              onClick={() => console.log("You clicked primary")}
            >
              Medium
            </Button>
            <Button
              color="primary"
              size="lg"
              onClick={() => console.log("You clicked secondary")}
            >
              Large
            </Button>
          </div>
        </section>

        <section className="flex flex-col items-center gap-6 ">
          <Title>Icon buttons</Title>
          <div className="flex flex-wrap items-center gap-8">
            <Button
              color="primary"
              startIcon={<MdShoppingCartCheckout className="text-xl" />}
              onClick={() => console.log("You clicked danger")}
            >
              Cart
            </Button>
            <Button
              endIcon={<MdOutlineCalendarMonth className="text-xl" />}
              onClick={() => console.log("You clicked danger")}
            >
              Schedule
            </Button>
            <Button
              color="danger"
              endIcon={<MdDeleteForever className="text-xl" />}
              onClick={() => console.log("You clicked danger")}
            >
              Delete
            </Button>
          </div>
        </section>


        <section className="flex flex-col items-center gap-6 ">

        <Title>Disable shadow</Title>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            $disableShadow
            onClick={() => console.log("You clicked default")}
          >
            Default
          </Button>
          <Button
            color="primary"
            $disableShadow
            onClick={() => console.log("You clicked primary")}
          >
            Primary
          </Button>
          <Button
            color="secondary"
            $disableShadow
            onClick={() => console.log("You clicked secondary")}
          >
            Secondary
          </Button>
          <Button
            color="danger"
            $disableShadow
            onClick={() => console.log("You clicked danger")}
          >
            Danger
          </Button>
        </div>
      </section>


        <section className="flex flex-col items-center gap-6">
          <Title>Disabled buttons</Title>
          <div className="flex flex-wrap items-center gap-8">
            <Button
              color="default"
              disabled
            >
              Default
            </Button>
            <Button
              color="primary"
              disabled
            >
              Primary
            </Button>
            <Button
              color="secondary"
              disabled
            >
              Secondary
            </Button>
            <Button
              color="danger"
              disabled
            >
              Danger
            </Button>
          </div>

        <div className="flex flex-wrap items-center gap-8">
          <Button
            $variant="outline"
            disabled
          >
            Default
          </Button>
          <Button
            $variant="outline"
            color="primary"
            disabled
          >
            Primary
          </Button>
          <Button
            $variant="outline"
            color="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button
            $variant="outline"
            color="danger"
            disabled
          >
            Danger
          </Button>
        </div>


        <div className="flex flex-wrap items-center gap-8">
          <Button
            $variant="text"
            disabled
          >
            Text
          </Button>
          <Button
            $variant="text"
            color="primary"
            disabled
          >
            Text
          </Button>
          <Button
            $variant="text"
            color="secondary"
            disabled
          >
            Text
          </Button>
          <Button
            $variant="text"
            color="danger"
            disabled
          >
            Text
          </Button>
        </div>

        </section>


      </main>
  )
}

export default Home