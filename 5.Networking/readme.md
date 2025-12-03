# ✅ Networking Devices

| Device        | Purpose                              |
| ------------- | ------------------------------------ |
| Host          | Uses/sends/receives data             |
| Repeater      | Boosts signal                        |
| Hub           | Broadcasts data to all devices       |
| Switch        | Sends data to specific device        |
| Bridge        | Connects LAN segments                |
| Router        | Connects different networks          |
| Modem         | Connects to ISP                      |
| Access Point  | Provides Wi-Fi                       |
| Dongle        | Adds wireless/mobile connectivity    |
| NIC           | Network card                         |
| Firewall      | Security control                     |
| Gateway       | Connects different types of networks |
| Load Balancer | Distributes traffic                  |
| Proxy         | Middleman for security & caching     |
| NAS           | Network storage                      |
| IDS/IPS       | Detects & prevents attacks           |


---


# ✅ Networking Types

| Network Type | Full Form                 | Coverage          | Real-Life Example    |
| ------------ | ------------------------- | ----------------- | -------------------- |
| **PAN**      | Personal Area Network     | Few meters        | Bluetooth, Hotspot   |
| **LAN**      | Local Area Network        | Home/Office       | Home WiFi            |
| **MAN**      | Metropolitan Area Network | City              | Metro WiFi, City ISP |
| **WAN**      | Wide Area Network         | Country/Continent | Airtel/Jio Internet  |
| **GAN**      | Global Area Network       | Entire planet     | The Internet         |

---


# 📝 ** (Important for Revision)**

* IPv4 is 32-bit and consists of 4 octets (0–255).
* Total IPv4 addresses = 4.29 billion.
* IP = Network part + Host part.
* Subnet mask identifies network vs host.
* Classes: A (large), B (medium), C (small).
* Private IP ranges: 10.x.x.x, 172.16.x.x – 172.31.x.x, 192.168.x.x
* Public IPs are globally unique and assigned by ISPs.
* Special IPs:

  * 127.0.0.1 → loopback
  * 0.0.0.0 → unspecified
  * 255.255.255.255 → broadcast
  * 169.254.x.x → APIPA
* DHCP gives dynamic IPs; static IPs are manually set.
* IPv4 shortage → reason for IPv6 existence.

---



# ✅ **1. What is an IPv4 Address?**

An **IPv4 address** is a **32-bit unique identifier** assigned to every device in a network.

It helps devices locate and communicate with each other.

Example IPv4 addresses:

* 192.168.1.1
* 10.0.0.5

---

# ✅ **2. IPv4 = 32 bits = 4 octets**

IPv4 has **32 bits** → divided into **4 blocks** (octets).

Example:
192.168.1.10

Binary form:

```
11000000.10101000.00000001.00001010
```

Each block **range** is 0–255 So the range of IPv4 is:

```
0.0.0.0 → 255.255.255.255
```

Total possible IPv4 addresses:

```
2^32 = 4,294,967,296 (4.29 billion)
```

---

# ✅ **3. Types of IPv4 Addresses**

IPv4 addresses are divided into classes.

---

## **Class A**

* Range: **1.0.0.0 → 126.255.255.255**
* For VERY large networks (millions of devices)
* Default subnet: /8

---

## **Class B**

* Range: **128.0.0.0 → 191.255.255.255**
* For medium networks
* Default subnet: /16

---

## **Class C**

* Range: **192.0.0.0 → 223.255.255.255**
* For small networks
* Default subnet: /24
  (used in homes & small offices)

---

## **Class D**

* Range: **224.0.0.0 → 239.255.255.255**
* Used for **Multicasting**, not for devices.

---

## **Class E**

* Range: **240.0.0.0 → 255.255.255.255**
* Reserved for research, not used.

---

# ✅ **4. Private vs Public IPv4**

## **Private IP**

Used inside LAN (home/office).

Private ranges:

* **10.0.0.0 – 10.255.255.255**
* **172.16.0.0 – 172.31.255.255**
* **192.168.0.0 – 192.168.255.255**

Examples:

* 192.168.1.10
* 10.0.0.5
* 172.16.20.8

These are NOT accessible from the internet.

---

## **Public IP**

Assigned by ISP; accessible over the Internet.

Examples:

* 49.37.75.102
* 103.94.211.10

Public IPs are unique globally.
---

# ✅ **6. IPv4 Structure: Network + Host**

IPv4 is divided into 2 parts:

### **Network Portion**

Identifies the network.

### **Host Portion**

Identifies the device inside that network.

Example:

```
192.168.1.10 /24
Network: 192.168.1
Host: 10
```

---

# ✅ **7. Subnet Mask**

The subnet mask tells which part of the IP is:

* **Network**
* **Host**

Example:

```
Subnet Mask: 255.255.255.0
CIDR: /24
```

This means:

* First 24 bits → Network
* Last 8 bits → Host

---

# ✅ **9. How Devices Get IPv4 Addresses?**

Two ways:

### **1. Dynamic (DHCP)**

Router automatically gives IP.

Example:

```
192.168.1.10 (given by router)
```

### **2. Static**

You manually set the IP.

Example:

```
Static IP: 192.168.1.50
Subnet Mask: 255.255.255.0
Gateway: 192.168.1.1
```
---
# 5. Special IPv4 Addresses
| Address             | Meaning                              |
| ------------------- | ------------------------------------ |
| **127.0.0.1**       | Loopback / localhost                 |
| **0.0.0.0**         | Default route / unspecified          |
| **255.255.255.255** | Broadcast                            |
| **169.254.x.x**     | APIPA (automatic IP when DHCP fails) |


---

# **10. Why IPv4 Is Running Out?**

Because:

* Only 4.3 billion addresses exist
* Billions of smartphones, laptops, IoT devices

Solution:
👉 IPv6 (128-bit, almost unlimited)

---

---
🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺
---

# ✅ Private vs Public IP Address

#### Public IP Address
- Public IP = Internet ka official address
Jise duniya ka koi bhi banda access kar sakta hai.
-Ye IP ISP (Jio, Airtel, BSNL, ACT) tumhare router/mobile ko dete hain.
- but you can take your own public IP by your service provider

#### Private IP Address
- Router ke peeche jo devices hote hain
- Private IP = Ghar/office ke andar device ka internal address.

### ⚔️ Final Comparison Table (Pros & Cons)
| Type           | Benefits                                             | Drawbacks                                                    |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| **Private IP** | Secure, free, unlimited devices, LAN fast            | Internet access nahi, hosting nahi, port forwarding required |
| **Public IP**  | Global access, hosting, remote access, communication | Expensive, security risks, limited supply                    |




# ✅ DNS (Domain Name System & Sever)

* DNS = Domain Name System; converts domain names to IP addresses.
* Ip address get through Domain Name in cmd:```nslookup <flipkart.com>```

* Needed because humans use names; computers use IPs.
* DNS resolution steps: Browser cache → OS cache → Resolver → Root → TLD → Authoritative server.
* Important DNS records:

  * A (represent or map IPv4)
  * AAAA (represent or map IPv6)
  * CNAME (alias)
  * TXT (verification/security)
  * NS (name server where and which Server handling your DNS)
* DNS caching improves speed but causes propagation delays.
* DNS hijacking/spoofing can redirect users to fake websites.
* Popular DNS servers: Google (8.8.8.8), Cloudflare (1.1.1.1).
* DNS is the internet’s phonebook system.

---

# Understanding IPv6 Addresses in Depth
* IPv6 = 128-bit next generation IP address system.
* Needed because IPv4 addresses (4.3B) were running out.
* Most IPv6 public addresses on phones/laptops are dynamic because of privacy extensions.
* IPv6 does NOT use NAT.
* IPv6 link-local addresses always exist even without internet.
* IPv6 has types:
  * GUA (Global Unicast) → Public IPv6
  * ULA (Unique Local) → Private IPv6 (like 192.168.x.x)
  * Link-Local (fe80) → Local only
* IPv6 has **3.4 × 10³⁸** addresses.
* IPv6 format: 8 groups of 4 hex digits separated by colons.
* Shortening rules: remove leading zeros & use `::` only once.
* IPv6 supports auto-configuration and built-in security.
* IPv6 not have NAT and it simplifies routing.
* Internet currently runs in **dual-stack mode** (IPv4 + IPv6).

---



# ✅ Port 

A **Port Number** is a unique number that identifies a specific process or service or program running on a device.

In simple words:

#### **IP address = identifies the device**
#### **Port number = identifies the specific service on that device**


* Your laptop = a house
* IP address = house address
* Port numbers = different rooms

  * Room 1 = HTTP server
  * Room 2 = Database
  * Room 3 = SSH
  * etc.

#### Difference Between Open, Closed, Filtered Ports
- Open → Accepts connections
- Closed → No service on that port
- Filtered → Blocked by firewall / ISP

### In Short 
* Port number identifies **specific services** inside a device.
* IP identifies the **device**, port identifies the **application**.
* Total ports = 65,536 (0–65535).
* Port categories:

  * **Well-known (0–1023)**
  * **Registered (1024–49151)**
  * **Dynamic/Private (49152–65535)**
* Common ports: 80 (HTTP), 443 (HTTPS), 22 (SSH), 53 (DNS), 3306 (MySQL), 27017 (MongoDB).
* Port + IP = Socket (e.g., 192.168.1.10:3000).
* Ports can be open, closed, or filtered by firewall/ISP.
* If a port is blocked or not listening, no device on the network can access it.
* Multiple services cannot use the **same port on the same IP** at the same time.

---



# ✅ MAC Address

When devices communicate inside your home network, MAC address is used.

Example:
Your mobile wants to send data to your laptop on same WiFi.

Steps:
```
1. Mobile asks: “What is the MAC of this IP?”
2. Laptop replies with MAC address
3. Mobile sends packets using laptop’s MAC
```
This process uses ARP (Address Resolution Protocol).


### In Short
- MAC = Media Access Control address, 48-bit, unique hardware address.
- Format: 6 groups of hex numbers (A4:B1:C2:00:11:3F).
- Assigned by manufacturer, stored in NIC.
- Works at Layer 2 (Data Link Layer).
- Used only in LAN communication, does not go to the internet.
- Identifies hardware, not network location.
- IP can change; MAC stays constant (unless spoofed).
- ARP converts IP → MAC.
- Wi-Fi routers use MAC filtering for access control.
- First 3 bytes (OUI) identify device manufacturer.
- It never leaves your local network (not sent to Internet)


---

# ✅ OSI Model (Open Systems Interconnection Model)


The **OSI Model** explains how data travels from one device to another across a network.

It tells us **what happens at each stage** when you send a message, open a website, upload a file, etc.


```
7. Application  
6. Presentation  
5. Session  
4. Transport  
3. Network  
2. Data Link  
1. Physical
```

* OSI Model has **7 layers** explaining how data travels between devices.
* Layers: Application, Presentation, Session, Transport, Network, Data Link, Physical.
* **Layer 7**: User-level protocols (HTTP, DNS).
* **Layer 6**: Encryption/Decryption (TLS).
* **Layer 5**: Session creation & management.
* **Layer 4**: TCP/UDP + port numbers.
* **Layer 3**: IP addressing + routers.
* **Layer 2**: MAC addressing + switches.
* **Layer 1**: Physical hardware (cables, wifi).
* Switch works at **L2**, router at **L3**, hub at **L1**, firewall at **L3/L4/L7**.
* OSI Model is theoretical, used for understanding.
* Real-world networks follow **TCP/IP Model** (4 layers).



---


# ✅ Understanding the TCP/IP Model

OSI model is **theoretical**, but
TCP/IP model is **practical and implemented everywhere**.

The **TCP/IP Model** (Transmission Control Protocol / Internet Protocol Model) defines **how data travels across the internet**.

It has **4 layers**:

```
4. Application Layer  
3. Transport Layer  
2. Internet Layer  
1. Network Access Layer
```

This is much simpler and practical than OSI's 7 layers.


* TCP/IP is the **real internet model**, OSI is a theoretical reference.
* TCP/IP has **4 layers**: Application, Transport, Internet, Network Access.
* Application layer combines OSI: App + Presentation + Session.
* Transport layer = TCP/UDP + ports.
* Internet layer = IP addressing + routers + routing.
* Network Access layer = MAC + switches + LAN communication.
* TCP is reliable, UDP is fast.

### OSI vs TCP/IP Model Comparison

| **OSI Model Layer**       | **TCP/IP Model Layer**   | **Data Name (PDU)**    | **Description**                                                                 |
|---------------------------|--------------------------|-------------------------|---------------------------------------------------------------------------------|
| **Application (Layer 7)** | **Application**          | **Data**               | Provides services for end-user applications like HTTP, FTP, DNS, SMTP.         |
| **Presentation (Layer 6)**| **Application**          | **Data**               | Handles data format translation, encryption, and compression.                  |
| **Session (Layer 5)**     | **Application**          | **Data**               | Manages sessions (establishment, maintenance, and termination).                |
| **Transport (Layer 4)**   | **Transport**            | **Segment (TCP)** / **Datagram (UDP)** | Ensures reliable or fast delivery with protocols like TCP or UDP.              |
| **Network (Layer 3)**     | **Internet**             | **Packet**             | Handles logical addressing (IP addresses) and routes data between networks.    |
| **Data Link (Layer 2)**   | **Network Access**       | **Frame**              | Structures packets into frames, adds MAC addresses, and manages error checking.|
| **Physical (Layer 1)**    | **Network Access**       | **Bits**               | Transmits raw binary data as electrical, optical, or radio signals.            |


---


# ✅ TCP and UDP: The Backbone of the Internet
-------------------- I N  S H O R T -----------------------------
* TCP and UDP are transport layer protocols.

* TCP = Reliable, slow, ordered, connection-oriented.

* UDP = Fast, no guarantee, connectionless.

* TCP uses 3-way handshake.
  * SYN → Client asks to connect
  * SYN + ACK → Server agrees
  * ACK → Client confirms

* UDP is used in: video calls, VoIP, gaming, streaming.

* TCP is used in: websites, email, FTP, SSH.

* TCP header is larger; UDP header is smaller.

* Both use port numbers to identify services.

* TCP focuses on accuracy; UDP focuses on speed.
  

---

# ✅ SSH 

**SSH (Secure Shell)** is a protocol that allows you to safely access another computer over a network (LAN or Internet).

SSH = Remote control of a computer terminal **securely**.



* SSH stands for **Secure Shell**.
* Used for **safe remote terminal access**.
* Runs on **TCP port 22**.
* Very secure → uses encryption & key-pairs.
* Needs: SSH server installed, service running, port 22 open.
* Works inside LAN using **private IP**.
* Works over Internet using **public IP** + port forwarding.
* Two authentication methods:
    * Password
    * Public/Private key (recommended)
* SCP uses SSH for secure file transfer.
* SSH is used in cloud servers, DevOps, backend deployment, Linux management.
* SSH Command to access server terminal by client: ```ssh username@server-ip```
    * example: ```ssh xyzterminal@192.168.0.113```
  
#### **SSH Command to access server terminal by client:**
SSH command syntax:
```
ssh username@server-ip
```

Example:
```
ssh ubuntu@54.23.121.5
```
---


# ✅ SSH Public and Private Keys
SSH uses **key cryptography** to authenticate you without a password.

An SSH key pair has TWO parts:

#### ✔ **1. Public Key (`id_rsa.pub`)**

* Safe to share
* Goes on the *server*
* Works like a **lock**

#### ✔ **2. Private Key (`id_rsa`)**

* **NEVER shared**
* Stays on your laptop
* Works like a **key to the lock**

👉 Together they create a secure authentication system.

* SSH keys = Public key + Private key pair.
* Private key stays on your system → DO NOT share.
* Public key goes to server → safe to share.
* Public key stored on server Folder: ```~/.ssh/authorized_keys```.
* Use ssh-keygen -t rsa -b 4096 to generate keys.
* Passwordless login uses key-based authentication.
* Improves security (cannot be brute forced).
* Mandatory for cloud servers like AWS, DigitalOcean.
* NEVER upload private keys anywhere.


- ```ssh-keygen -t rsa -b 4096``` → generates strong 4096-bit RSA SSH key pair
- ```-t rsa``` = RSA algorithm  , -t means type of key.
- ```-b 4096``` = 4096-bit strength (secure), -b means number of bits (strength of the key).






---


