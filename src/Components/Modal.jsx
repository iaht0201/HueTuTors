import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import GSAnh from "../assets/images/GS-ANH.png";
export default function Modal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <img
        src={
          "https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
        }
        alt=""
        onClick={handleOpen}
        className="w-full max-h-[300px] object-cover object-center"
      />
      {/* <Button
        onClick={handleOpen}
        variant="gradient"
        className="text-black"
      ></Button> */}
      <Dialog open={open} handler={handleOpen} className="top-20">
        <img
          src={
            "https://cdn.pixabay.com/photo/2022/09/13/17/02/leaves-7452420_960_720.jpg"
          }
          alt=""
          onClick={handleOpen}
          className="w-full max-h-[300px] object-cover object-center"
        />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
