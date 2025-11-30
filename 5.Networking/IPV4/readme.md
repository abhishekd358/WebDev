
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
# ✅ 5. Special IPv4 Addresses
| Address             | Meaning                              |
| ------------------- | ------------------------------------ |
| **127.0.0.1**       | Loopback / localhost                 |
| **0.0.0.0**         | Default route / unspecified          |
| **255.255.255.255** | Broadcast                            |
| **169.254.x.x**     | APIPA (automatic IP when DHCP fails) |


---

# ✅ **10. Why IPv4 Is Running Out?**

Because:

* Only 4.3 billion addresses exist
* Billions of smartphones, laptops, IoT devices

Solution:
👉 IPv6 (128-bit, almost unlimited)

---



# Private vs Public IP Address

## Public IP Address
- Public IP = Internet ka official address
Jise duniya ka koi bhi banda access kar sakta hai.
-Ye IP ISP (Jio, Airtel, BSNL, ACT) tumhare router/mobile ko dete hain.
- but you can take your own public IP by your service provider

## Private IP Address
- Router ke peeche jo devices hote hain
- Private IP = Ghar/office ke andar device ka internal address.

## ⚔️ Final Comparison Table (Pros & Cons)
| Type           | Benefits                                             | Drawbacks                                                    |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| **Private IP** | Secure, free, unlimited devices, LAN fast            | Internet access nahi, hosting nahi, port forwarding required |
| **Public IP**  | Global access, hosting, remote access, communication | Expensive, security risks, limited supply                    |




# DNS (Domain Name System & Sever)

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
* IPv6 has **3.4 × 10³⁸** addresses.
* IPv6 format: 8 groups of 4 hex digits separated by colons.
* Shortening rules: remove leading zeros & use `::` only once.
* IPv6 supports auto-configuration and built-in security.
* IPv6 not have NAT and it simplifies routing.
* Internet currently runs in **dual-stack mode** (IPv4 + IPv6).

---

