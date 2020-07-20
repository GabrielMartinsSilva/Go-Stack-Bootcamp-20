import Appointment from "../models/Appointment";
import { startOfHour } from "date-fns";
import appointmentsRepository from "../repositories/AppointmentsRepository";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface Request {
  date: Date;
  provider: string;
}

class CreateAppointmentService {
  private appointmentsRepository: appointmentsRepository;

  constructor(appointmentsRepository: appointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const AppointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      AppointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This Appointment is already booked");
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: AppointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
