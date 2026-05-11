import { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native'

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
      <Text style={styles.owner}>UZOMBA EBUBE VICTORY</Text>
      
      {/* ADDED ELEMENT FOR ASSIGNMENT REQUIREMENT */}
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>Assignment Status: Home Page Updated ✅</Text>
      </View>

      <Text style={styles.dayCounter}>Day 2 of 50 - 50 Day Project</Text>
      <Text style={styles.header}>Cybersec Roadmap 2026</Text>
      <Text style={styles.sub}>Tap a path to expand</Text>

      <View style={styles.dayButton}>
        <Button 
            title="Mark Day 2 Complete" 
            onPress={() => console.log('Day 2 commit: Roadmap updated')} 
            color="#52796F" 
        />
      </View>

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
        <div style={styles.certWrap as any}>
          {roadmaps[active].certs.map((cert, i) => (
            <View key={i} style={styles.certBadge}>
              <Text style={styles.certText}>{cert}</Text>
            </View>
          ))}
        </div>
      </View>

      <Text style={styles.footer}>Commit #2 - Eco Edition: you got this 💪</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F7', // Soft Off-White
    padding: 20,
  },
  owner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D4739', // Forest Green
    marginTop: 40,
    textAlign: 'center',
  },
  statusBadge: {
    backgroundColor: '#E8EDE8',
    padding: 8,
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#84A98C',
    alignSelf: 'center',
  },
  statusText: {
    color: '#52796F',
    fontSize: 12,
    fontWeight: '600',
  },
  dayCounter: {
    fontSize: 14,
    color: '#6B8E23', // Olive
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D4739',
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    color: '#52796F',
    marginBottom: 20,
  },
  dayButton: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#E8EDE8',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C2CDC2',
  },
  tabActive: {
    backgroundColor: '#84A98C', // Moss Green
    borderColor: '#52796F',
  },
  tabEmoji: {
    fontSize: 16,
    textAlign: 'center',
  },
  tabText: {
    color: '#52796F',
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF', // Clean White Card
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D4739',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#52796F',
    marginTop: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  bullet: {
    color: '#84A98C',
    marginRight: 10,
    fontWeight: 'bold',
  },
  stepText: {
    color: '#4A4A4A',
    flex: 1,
    lineHeight: 22,
    fontSize: 14,
  },
  certWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5,
  },
  certBadge: {
    backgroundColor: '#F0F4F0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#84A98C',
  },
  certText: {
    color: '#2D4739',
    fontSize: 11,
    fontWeight: '700',
  },
  footer: {
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 12,
    fontStyle: 'italic',
  },
})
