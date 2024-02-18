import os from 'os'

export const getInternetProtocolAdress = () => {
    let ip: string | undefined
    const networkInterfaces = os.networkInterfaces()
    for (const interfaceName in networkInterfaces) {
      const interfaces = networkInterfaces[interfaceName]
      for (const iface of interfaces ?? []) {
        if (iface.family === 'IPv4' && !iface.internal) {
          ip = iface.address
          break
        }
      }
    }
    return {ip}
}
