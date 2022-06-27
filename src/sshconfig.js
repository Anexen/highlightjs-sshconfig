/*
Language: SSH config
Description: OpenSSH SSH client configuration files
Website: https://github.com/Anexen/highlightjs-sshconfig
*/

// man ssh | grep -E '^ +\b[A-Za-z]+\b$' | grep -vwE 'Host|Match' | xargs | xclip -sel clip
module.exports = function (hljs) {
  // prettier-ignore
  var OPTIONS = "AddKeysToAgent AddressFamily BatchMode BindAddress CanonicalDomains CanonicalizeFallbackLocal CanonicalizeHostname CanonicalizeMaxDots CanonicalizePermittedCNAMEs CASignatureAlgorithms CertificateFile CheckHostIP Ciphers ClearAllForwardings Compression ConnectionAttempts ConnectTimeout ControlMaster ControlPath ControlPersist DynamicForward EscapeChar ExitOnForwardFailure FingerprintHash ForkAfterAuthentication ForwardAgent GatewayPorts GlobalKnownHostsFile GSSAPIAuthentication GSSAPIDelegateCredentials HashKnownHosts HostbasedAcceptedAlgorithms HostbasedAuthentication HostKeyAlgorithms HostKeyAlias Hostname IdentitiesOnly IdentityAgent IdentityFile IPQoS KbdInteractiveAuthentication KbdInteractiveDevices KexAlgorithms KnownHostsCommand LocalCommand LocalForward LogLevel MACs NoHostAuthenticationForLocalhost NumberOfPasswordPrompts PasswordAuthentication PermitLocalCommand PermitRemoteOpen Port PreferredAuthentications ProxyCommand ProxyJump ProxyUseFdpass PubkeyAcceptedAlgorithms PubkeyAuthentication RekeyLimit RemoteCommand RemoteForward RequestTTY SendEnv ServerAliveInterval ServerAliveCountMax SessionType SetEnv StdinNull StreamLocalBindMask StreamLocalBindUnlink StrictHostKeyChecking TCPKeepAlive Tunnel TunnelDevice UpdateHostKeys User UserKnownHostsFile VerifyHostKeyDNS VisualHostKey XAuthLocation";

  return {
    case_insensitive: true,
    aliases: ["ssh_config", "sshd_config"],
    keywords: {
      keyword: "Host Match",
      literal: "yes no auto",
    },
    contains: [
      hljs.COMMENT("#", "$"),
      hljs.NUMBER_MODE,
      {
        className: "name",
        beginKeywords: "Host",
        excludeBegin: true,
        end: /$/,
      },
      {
        className: "built_in",
        begin: /^\s*[A-Za-z]+/,
        keywords: {
          built_in: OPTIONS,
        },
      },
      {
        className: "symbol",
        begin: /%[%CdhikLlnpru]/,
      },
    ],
  };
};
