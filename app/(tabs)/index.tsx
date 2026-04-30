import { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

type Roadmap = {
  title: string
  emoji: string
  steps: string[]
  certs: string[]
}

const roadmaps: Roadmap[] = [
  {
    title: 'Pentest / Red Team',
    emoji: '🔴',
    steps: [
      'Networking + Linux basics',
      'Web app hacking: OWASP Top 10',
      'Active Directory attacks',
      'OSCP → CRTP → OSEP',
      'EDR evasion + custom tooling',
      'Lead engagements + reporting'
    ],
    certs: ['eJPT', 'PNPT', 'OSCP', 'CRTP', 'CRTE', 'OSEP', 'OSCE3']
  },
  {
    title: 'Cloud Security',
    emoji: '☁️',
    steps: [
      'Cloud basics: AZ-900 / AWS CCP',
      'IAM + Identity abuse',
      'Azure/AWS pentesting',
      'Terraform + IaC review',
      'CARTP → CARTE',
      'Multi-cloud + detection'
    ],
    certs: ['AZ-900', 'AWS SCS-C02', 'CARTP', 'CARTE', 'OSCP', 'GCPN']
  },
  {
    title: 'Blue Team / SOC',
    emoji: '🔵',
    steps: [
      'Logs + SIEM: Splunk/ELK',
      'Windows internals + forensics',
      'Threat hunting + detection eng',
      'Incident response playbooks',
      'BTL1 → GCIH → GCFA',
      'Malware analysis + RE'
    ],
    certs: ['Security+', 'BTL1', 'GCIH', 'GCFA', 'GNFA', 'GREM']
  },
  {
    title: 'AppSec / Code Review',
    emoji: '🛡️',
    steps: [
      'Secure coding: JS/Python/Java',
      'SAST/DAST tools + CI/CD',
      'Manual code review',
      'OSWE + burp suite mastery',
      'Threat modeling',
      'DevSecOps pipelines'
    ],
    certs: ['OSWE', 'GWAPT', 'CASE', 'CSSLP', 'OSCP']
  }
]

export default function Index() {
  const [active, setActive] = useState<number>(0)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Cybersec Roadmap 2026</Text>
      <Text style={styles.sub}>Tap a path to expand</Text>

      <View style={styles.tabRow}>
        {roadmaps.map((roadmap, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.tab, active === idx && styles.tabActive]}
            onPress={() => setActive(idx)}
          >
            <Text style={styles.tabEmoji}>{roadmap.emoji}</Text>
            <Text style={[styles.tabText, active === idx && styles.tabTextActive]}>
              {roadmap.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{roadmaps[active].emoji} {roadmaps[active].title}</Text>

        <Text style={styles.sectionTitle}>Steps:</Text>
        {roadmaps[active].steps.map((step, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.bullet}>{i + 1}.</Text>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Key Certs:</Text>
        <View style={styles.certWrap}>
          {roadmaps[active].certs.map((cert, i) => (
            <View key={i} style={styles.certBadge}>
              <Text style={styles.certText}>{cert}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.footer}>From laptop server: you got this 💪</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ff88',
    marginTop: 40,
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  tabActive: {
backgroundColor: '#00ff88',
    borderColor: '#00ff88',
  },
  tabEmoji: {
    fontSize: 16,
    textAlign: 'center',
  },
  tabText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff88',
    marginTop: 12,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    color: '#00ff88',
    marginRight: 8,
    fontWeight: 'bold',
  },
  stepText: {
    color: '#ddd',
    flex: 1,
    lineHeight: 20,
  },
  certWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  certBadge: {
    backgroundColor: '#0a0a0a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#00ff88',
  },
  certText: {
    color: '#00ff88',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    color: '#555',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 40,
    fontSize: 12,
  },
})