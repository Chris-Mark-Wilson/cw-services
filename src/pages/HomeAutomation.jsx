export const HomeAutomation = () => {
    return (
        <div className="page">
        <h1>Home Automation</h1>
        <section className="description">

            <p>
                Home automation is the residential extension of building automation. It involves the control and automation of lighting, heating, ventilation, air conditioning, and security, as well as home appliances such as washer/dryers, ovens, and refrigerators/freezers. 
                <br/>
                <br/>
                Home automation is a step towards what is referred to as the "Internet of Things," in which everything has an assigned IP address, enabling communication between devices and allowing them to be remotely monitored and controlled.
                <br/>
                <br/>
                Home automation is a growing field, with the potential to greatly improve the quality of life for homeowners. It can be used to increase energy efficiency, improve security, and provide convenience and comfort.
            </p>
        </section>
        <section className='details'>
            <p>With the popularity of home automation increasing in the UK I looked into a way to solve an age old problem using this new tech. The problem being fuel bills in HMO (multiple occupation housing)</p>
            <p>With tennants mostly being at work, why have the heating on for that room? </p>
            <p>Why have the radiator on full with the window wide open?</p>
            <p>What if you could control the heating system based on these variables?</p> 
        </section>
        <section className='details'>
        <details className='description'>{/*open*/}
            <summary>What is Home Automation?</summary>
            <p>Home automation is the use of one or more computers to control basic home functions and features automatically and sometimes remotely. An automated home is sometimes called a smart home.</p>
        </details>
        <details className='description'>
            <summary>How does it work?</summary>
            <p>Home automation works by making electronic devices and appliances work together. It uses a combination of hardware and software technologies that enable control and management over appliances and devices within a home.</p>
            <p>A radiator valve can now be computer controlled. </p>
            <p>IF the tennant is home, AND the temperature in the room is below say 20 degrees AND the window is closed THEN turn on the radiator</p>
            <p>IF a window is opened, THEN turn off the radiator</p>
            <p>IF there is no-one in the room for 10 minutes, THEN turn OFF the radiator</p>
            <p>IF all the radiator valves are in the OFF state, THEN turn off the call for heat to the boiler.</p>
        </details>

        <details className='description'>
            <summary>
                What hardware is required?
                </summary>
                <p>Using an open source operating system installed onto a basic computer, most IOT devices, irrespective of brand can be controlled centrally.</p>
                <p>The computer can be anything from a generic x86 machine with UEFI boot caapability to a rasberry PI mini</p>
                <p>A zigbee adaptor is connected to this 'server' so it can talk to the hardware components</p>
                <p>Simple 2 state sensors are fitted to the windows </p>
                <p>Zigbee thermostatic radiator valves are fitted to all radiators</p>
                <p>A Zigbee switch is fitted to the boiler (call for heat)</p>
                <p>A device known as a 'human presence sensor' is fitted to each room. This is basically a tiny microwave radar, much more sensitive than a standard passive infra red (PIR) detector than can pick up a person breathing even if they are asleep</p>
                </details> 
                <details>
                    <summary>What is Zigbee and why use it?</summary>
                    <p>Zigbee is an IOT (internet of things) protocol that is designed to be low power and low bandwidth. It is a mesh network, meaning that each device can talk to each other device. This means that the more devices you have, the more reliable the network becomes.</p>
                    <p>A zigbee device that is connected to a permanent power supply e.g. a presence detector, becomes part of the mesh network and acts as a 'repeater' or 'access point' for the network</p>
                    <p>This means that the range of the network is increased from the original zigbee adapter connected to the 'hub' computer (e.g. your rasberry pi mini)</p>
                    <p>Zigbee devices, unlike wifi devices spend most of their time 'asleep' and only 'wake up' when they need to either send or recieve information from the hub</p>
                    <p>Therefore battery life for a zigbee device NOT connected to a permanent power supply e.g. a radiator valve or a window sensor, is greatly increased.</p>
                    <p>You might change the batteries once a year at worst</p>
                </details>
                <details>
                    <summary>How do I 'talk' to the system?</summary>
                    <p>The 'hub' is connected to your wifi router. This is so you can access your 'dashboard' via any device connected to the local wifi. This dashboard is your 'interface' with the system. It allows you to create your 'rules' of operation e.g. IF the presence detector does not detect anyone for 10 minutes THEN turn OFF the radiator</p>
                    <p>Privacy settings can be applied to lock out access completely to the tennants, or give each individual tennant access to their own 'room' data</p>
                    <p>Should you require access to the system off-site, then a 'port forwarding rule' can be applied to your wifi router to allow you to login to the system from anywhere in the world</p>
                    </details>
                <details>
                        <summary>Are there any privacy concerns?</summary>
                        <p>Yes, most tennants absolutely baulk at the thought that someone else may be able to tell if they are in residence or not. The simple solution is to lock out everyone from the sytem locally leaving only the landlord with access, and only then if they are on site.</p>
                    </details>
                    <details>
                        <summary>
                            What if it breaks?
                        </summary>
                        <p>Should any one component (or multiple components) fail for any reason, or simply go offline, then the system can be set up to default back to the 'everything on' setting and send a notification to the landlord</p>
                    </details>
              
                </section>           

        </div>
    )
    }