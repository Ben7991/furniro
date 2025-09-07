import Link from 'next/link';

import { Col, Container, Row } from '@/components/atoms/grid/Grid';
import { Headline } from '@/components/atoms/headline/Headline';

export function Footer(): React.JSX.Element {
  return (
    <footer className="py-10">
      <Container className="border-b border-b-gray-300 pb-10">
        <Row className="flex-col md:flex-row justify-between gap-8">
          <Col className="basis-4/12">
            <Headline tag="h4" className="mb-3 md:mb-5 lg:mb-6">
              Furniro.
            </Headline>
            <p>
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </Col>
          <Col className="basis-2/12">
            <Headline tag="h5" className="mb-3 md:mb-5 lg:mb-6">
              Links
            </Headline>
            <ul>
              <li className="mb-3">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="basis-2/12">
            <Headline tag="h5" className="mb-3 md:mb-5 lg:mb-6">
              Help
            </Headline>
            <ul>
              <li className="mb-3">
                <Link href="/payment-options" className="hover:underline">
                  Payment Options
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/privacy-policies" className="hover:underline">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="basis-3/12">
            <Headline tag="h5" className="mb-3 md:mb-5 lg:mb-6">
              NewsLetter
            </Headline>
            <form>
              <div className="flex md:flex-col lg:flex-row md:items-start lg:items-center gap-3">
                <input
                  type="email"
                  className="border-b border-b-black outline-none w-[90%]"
                  placeholder="Enter your Email Address"
                />
                <button
                  type="submit"
                  className="uppercase border-b border-b-black text-black cursor-pointer text-[0.875em]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <p className="text-center">
          &copy; Furniro. 2025 | All rights reserved
        </p>
      </Container>
    </footer>
  );
}
