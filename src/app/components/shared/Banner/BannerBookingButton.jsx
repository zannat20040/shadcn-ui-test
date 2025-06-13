import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormHeader from "../FormHeader";
import BookingConsultantForm from "./BookingConsultantForm";

export default function BannerBookingButton() {
  return (
    <Dialog>
      <DialogTrigger
        className="peer bg-blue-900 text-white px-6 py-3 rounded-full transition-all duration-500  
            group-hover:bg-transparent group-hover:text-blue-900
            hover:bg-blue-900 hover:text-white hover:px-10"
      >
        {" "}
        Book Free Consultation
      </DialogTrigger>
      <DialogContent className={'bg-blue-50 dark:bg-gray-900'}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <FormHeader
              title={"Start Your Study Abroad Journey Here"}
              subtitle={
                "Tell us a bit about yourself — and let our expert consultants guide you to the right path, step by step."
              }
            />
          </DialogDescription>
          <BookingConsultantForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
