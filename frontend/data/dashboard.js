export const sidebarItems = [
  {
    id: 1,
    href: "/db-main",
    iconClass: "icon-dashboard text-26",
    label: "Main Dashboard",
  },
  {
    id: 2,
    href: "/db-booking",
    iconClass: "icon-calendar text-26",
    label: "Booking",
  },
  {
    id: 3,
    href: "/db-listing",
    iconClass: "icon-menu text-26",
    label: "My Events",
  },
  {
    id: 4,
    href: "/db-add-event",
    iconClass: "icon-clipboard text-26",
    label: "Add Event",
  },
  {
    id: 5,
    href: "/db-profile",
    iconClass: "icon-account text-26",
    label: "My Profile",
  },
  { id: 6, href: "/", iconClass: "icon-logout text-26", label: "Logout" },
];

export const eventSidebarItems = (eventId) => [
  {
    id: 1,
    href: `/db-main`,
    iconClass: "icon-home text-26",
    label: "Main Dashboard",
  },
  {
    id: 2,
    href: `/db-event-single/${eventId}`,
    iconClass: "icon-dashboard text-26",
    label: "Event Dashboard",
  },
  {
    id: 3,
    href: `/db-booking-event/${eventId}`,
    iconClass: "icon-calendar text-26",
    label: "Booking",
  },
  {
    id: 4,
    href: `/db-ticketing/${eventId}`,
    iconClass: "icon-reservation text-26",
    label: "Ticketing",
  },
  {
    id: 5,
    href: `/db-crew/${eventId}`,
    iconClass: "icon-teamwork text-26",
    label: "My Crew",
  },
  {
    id: 6,
    href: `/db-gating/${eventId}`,
    iconClass: "icon-star-2 text-26",
    label: "Gating",
  },
  {
    id: 7,
    href: `/db-general/${eventId}`,
    iconClass: "icon-booking text-26",
    label: "General",
  },
  { id: 8, href: "/", iconClass: "icon-logout text-26", label: "Logout" },
];

export const states = [
  {
    id: 1,
    title: "Gross Sales",
    amount: "Rp 12.000.800",
    today: "Rp 500.000",
    iconClass: "icon-wallet text-accent-1",
  },
  {
    id: 2,
    title: "Tickets Sold",
    amount: "1.200",
    today: "40",
    iconClass: "icon-payment text-accent-1",
  },
  {
    id: 3,
    title: "Total Booking",
    amount: "54",
    today: "10",
    iconClass: "icon-booking text-accent-1",
  },
  {
    id: 4,
    title: "Sellout Rate",
    amount: "96%",
    today: "+2%",
    iconClass: "icon-heart text-accent-1",
  },
];

export const statesData = {
  "1": [
    { title: 'Gross Sales', amount: 'Rp 2.000.800', today: 'Rp 500.000', iconClass: 'icon-sales' },
    { title: 'Tickets Sold', amount: '1.200', today: '40', iconClass: 'icon-tickets' },
    { title: 'Total Booking', amount: '54', today: '10', iconClass: 'icon-booking' },
    { title: 'Sellout Rate', amount: '96%', today: '+2%', iconClass: 'icon-sellout' },
  ],
  "2": [
    { title: 'Gross Sales', amount: 'Rp 8.000.500', today: 'Rp 300.000', iconClass: 'icon-sales' },
    { title: 'Tickets Sold', amount: '1.000', today: '30', iconClass: 'icon-tickets' },
    { title: 'Total Booking', amount: '45', today: '8', iconClass: 'icon-booking' },
    { title: 'Sellout Rate', amount: '90%', today: '+1%', iconClass: 'icon-sellout' },
  ],
};

export const notificationData = [
  {
    id: 1,
    icon: "icon-home",
    message: "Your listing House on the Beverly Hills has been approved",
  },
  {
    id: 2,
    icon: "icon-review",
    message: "Dollie Horton left a review on House on the Northridge",
  },
  {
    id: 3,
    icon: "icon-heart",
    message: "Someone favorites your Triple Story House for Rent listing",
  },
  {
    id: 4,
    icon: "icon-heart",
    message: "Someone favorites your Triple Story House for Rent listing",
  },
  {
    id: 5,
    icon: "icon-home",
    message: "Your listing House on the Beverly Hills has been approved",
  },
  {
    id: 6,
    icon: "icon-review",
    message: "Dollie Horton left a review on House on the Northridge",
  },
];

export const tabContentStaticties = [
  {
    id: 1,
    label: "Hours",
    data: [
      { name: "12PM", value: 148 },
      { name: "2AM", value: 100 },
      { name: "4AM", value: 205 },
      { name: "6AM", value: 110 },
      { name: "8AM", value: 165 },
      { name: "10AM", value: 145 },
      { name: "12AM", value: 180 },
      { name: "2PM", value: 156 },
      { name: "4PM", value: 148 },
      { name: "6PM", value: 220 },
      { name: "8PM", value: 180 },
      { name: "10PM", value: 245 },
    ],
  },
  {
    id: 2,
    label: "Weekly",
    data: [
      { name: "1st", value: 158 },
      { name: "2nd", value: 210 },
      { name: "3rd", value: 180 },
      { name: "4th", value: 235 },
      { name: "5th", value: 100 },
    ],
  },
  {
    id: 3,
    label: "Monthly",
    data: [
      { name: "Jan", value: 158 },
      { name: "Feb", value: 100 },
      { name: "Marc", value: 235 },
      { name: "April", value: 210 },
      { name: "May", value: 165 },
      { name: "Jun", value: 145 },
      { name: "July", value: 190 },
      { name: "Agust", value: 156 },
      { name: "Sept", value: 148 },
      { name: "Oct", value: 210 },
      { name: "Now", value: 180 },
      { name: "Dec", value: 235 },
    ],
  },
];

export const ticketData = [
  {
    eventId: "1",
    name: "VIP Ticket",
    price: 100.0,
    quota: 50,
    sold: 25,
    status: "listed"
  },
  {
    eventId: "1",
    name: "General Admission",
    price: 50.0,
    quota: 200,
    sold: 150,
    status: "listed"
  },
  {
    eventId: "1",
    name: "Early Bird",
    price: 40.0,
    quota: 100,
    sold: 80,
    status: "listed"
  },
  {
    eventId: "2",
    name: "Standard Ticket",
    price: 75.0,
    quota: 150,
    sold: 150,
    status: "soldout"
  },
  {
    eventId: "2",
    name: "Premium Ticket",
    price: 120.0,
    quota: 100,
    sold: 100,
    status: "soldout"
  },
  {
    eventId: "3",
    name: "Student Ticket",
    price: 30.0,
    quota: 200,
    sold: 200,
    status: "sold out by admin"
  },
  {
    eventId: "3",
    name: "Regular Ticket",
    price: 60.0,
    quota: 150,
    sold: 100,
    status: "listed"
  },
];

export const gateData = [
  {
    key: 1,
    gateName: "Main Entrance",
    crew: ["Crew 1", "Crew 2"],
    scans: 120,
    eventId: "1"
  },
  {
    key: 2,
    gateName: "VIP Entrance",
    crew: ["Crew 3"],
    scans: 50,
    eventId: "1"
  },
  {
    key: 3,
    gateName: "Side Entrance",
    crew: ["Crew 4", "Crew 5"],
    scans: 80,
    eventId: "1"
  },
  {
    key: 4,
    gateName: "Back Entrance",
    crew: ["Crew 6"],
    scans: 30,
    eventId: "1"
  },
  {
    key: 5,
    gateName: "North Gate",
    crew: ["Crew 7"],
    scans: 100,
    eventId: "2"
  },
  {
    key: 6,
    gateName: "South Gate",
    crew: ["Crew 8"],
    scans: 90,
    eventId: "2"
  },
];

export const allCrewMembers = [
  "Crew 1",
  "Crew 2",
  "Crew 3",
  "Crew 4",
  "Crew 5",
  "Crew 6",
  "Crew 7",
  "Crew 8"
];


export const checkInData = [
  {
    eventId: "1",
    name: "John Doe",
    status: "Checked In",
    gate: "Gate 1",
    crew: "Crew A",
    checkInTime: "10:30 AM",
  },
  {
    eventId: "1",
    name: "Jane Smith",
    status: "Checked In",
    gate: "Gate 2",
    crew: "Crew B",
    checkInTime: "11:00 AM",
  },
  {
    eventId: "1",
    name: "Alice Johnson",
    status: "Not Checked In",
    gate: "",
    crew: "",
    checkInTime: "",
  },
];

export const ticketHolderData = [
  {
    eventId: "1",
    name: "John Doe",
    ticketType: "VIP Ticket",
    bookingId: "B12345",
    ticketNumber: "T0011"
  },
  {
    eventId: "1",
    name: "John Doe2",
    ticketType: "VIP Ticket",
    bookingId: "B12345",
    ticketNumber: "T0021"
  },
  {
    eventId: "1",
    name: "John Doe3",
    ticketType: "VIP Ticket",
    bookingId: "B12345",
    ticketNumber: "T0031"
  },
  {
    eventId: "1",
    name: "Jane Smith",
    ticketType: "General Admission",
    bookingId: "B12346",
    ticketNumber: "T0002"
  },
  {
    eventId: "1",
    name: "Alice Johnson",
    ticketType: "Early Bird",
    bookingId: "B12347",
    ticketNumber: "T0003"
  },
  {
    eventId: "2",
    name: "Bob Brown",
    ticketType: "Standard Ticket",
    bookingId: "B12348",
    ticketNumber: "T0004"
  },
  {
    eventId: "2",
    name: "Charlie Davis",
    ticketType: "Premium Ticket",
    bookingId: "B12349",
    ticketNumber: "T0005"
  },
  {
    eventId: "3",
    name: "Eve White",
    ticketType: "Student Ticket",
    bookingId: "B12350",
    ticketNumber: "T0006"
  },
  {
    eventId: "3",
    name: "Frank Green",
    ticketType: "Regular Ticket",
    bookingId: "B12351",
    ticketNumber: "T0007"
  },
];

export const bookingData = [
  {
    id: 1,
    orderNumber: "B12345",
    eventId: "1",
    username: "alice",
    bookingDate: "11 April 2023",
    numberOfTickets: 3,
    totalCost: "$300.00",
    status: "Approved",
  },
  {
    id: 2,
    orderNumber: "B12346",
    eventId: "1",
    username: "bob",
    bookingDate: "12 April 2023",
    numberOfTickets: 4,
    totalCost: "$200.00",
    status: "Pending",
  },
  {
    id: 3,
    orderNumber: "B12347",
    eventId: "1",
    username: "charlie",
    bookingDate: "13 April 2023",
    numberOfTickets: 1,
    totalCost: "$50.00",
    status: "Cancelled",
  },
  {
    id: 4,
    orderNumber: "B12348",
    eventId: "1",
    username: "david",
    bookingDate: "14 April 2023",
    numberOfTickets: 3,
    totalCost: "$150.00",
    status: "Approved",
  },
  {
    id: 5,
    orderNumber: "B12349",
    eventId: "1",
    username: "eve",
    bookingDate: "15 April 2023",
    numberOfTickets: 5,
    totalCost: "$250.00",
    status: "Pending",
  },
  {
    id: 6,
    orderNumber: "B12350",
    eventId: "2",
    username: "frank",
    bookingDate: "16 April 2023",
    numberOfTickets: 2,
    totalCost: "$120.00",
    status: "Approved",
  },
  {
    id: 7,
    orderNumber: "B12351",
    eventId: "2",
    username: "grace",
    bookingDate: "17 April 2023",
    numberOfTickets: 3,
    totalCost: "$180.00",
    status: "Pending",
  },
  {
    id: 8,
    orderNumber: "B12352",
    eventId: "2",
    username: "henry",
    bookingDate: "18 April 2023",
    numberOfTickets: 1,
    totalCost: "$60.00",
    status: "Cancelled",
  },
  {
    id: 9,
    orderNumber: "B12353",
    eventId: "2",
    username: "irene",
    bookingDate: "19 April 2023",
    numberOfTickets: 4,
    totalCost: "$240.00",
    status: "Approved",
  },
  {
    id: 10,
    orderNumber: "B12354",
    eventId: "2",
    username: "jack",
    bookingDate: "20 April 2023",
    numberOfTickets: 5,
    totalCost: "$300.00",
    status: "Pending",
  },
];

export const crewData = [
  {
    id: 1,
    username: "alice",
    eventId: "2",
    email: "alice@example.com",
    crewId: "C001",
    role: "gating",
    status: "on duty",
  },
  {
    id: 2,
    username: "bob",
    eventId: "2",
    email: "bob@example.com",
    crewId: "C002",
    role: "ticketing",
    status: "off duty",
  },
  {
    id: 3,
    username: "charlie",
    eventId: "2",
    email: "charlie@example.com",
    crewId: "C003",
    role: "gating",
    status: "on duty",
  },
  {
    id: 4,
    username: "david",
    eventId: "2",
    email: "david@example.com",
    crewId: "C004",
    role: "ticketing",
    status: "off by admin",
  },
  {
    id: 5,
    username: "eve",
    eventId: "2",
    email: "eve@example.com",
    crewId: "C005",
    role: "gating",
    status: "on duty",
  },
];

