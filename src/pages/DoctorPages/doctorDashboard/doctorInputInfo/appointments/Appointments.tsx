
  import { Typography } from "@material-tailwind/react";
import { Button, DashboardSection } from "../../../../../components";
  
  const TABLE_HEAD = [
    "Patient Name",
    "Consultation Mode",
    "Appointment No",
    "Appointment Date & Time",
    "Status",
    "Action",
  ];
  
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];
  
  export default function Appointments() {
    return (
      <DashboardSection>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Appointments</h2>
          <div className="mt-4 sm:mt-0">
            <Button title="Save Changes" className="w-fit" secondary={true} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="bg-white p-2 sm:p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }) => (
                <tr key={name} className="odd:bg-[#5C89D826]">
                  <td className="p-2 sm:p-4">
                    <Typography variant="small" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4">
                    <Typography
                      variant="small"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4">
                    <Typography variant="small" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4">
                    <Typography variant="small" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4">
                    <Button
                      className="font-bold text-xs bg-[#EBF9F1] border border-[#41BC63] bg-none text-[#41BC63]"
                      title="Open"
                      disabled
                    />
                  </td>
                  <td className="p-2 sm:p-4">
                    <Button
                      className="font-bold text-xs rounded-md"
                      title="Pay Now"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardSection>
    );
  }
  