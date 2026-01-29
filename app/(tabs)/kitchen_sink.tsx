import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    TextInput,
} from "react-native";

/**
 * KitchenSinkStatesScreen
 * - Shows "Loading / Error / Empty / Success" as simple cards.
 * - Uses only core React Native components.
 * - Includes a few extra primitives (TextInput, Switch, Image, Pressable)
 */
export default function KitchenSinkStatesScreen() {
    const [isOnline, setIsOnline] = useState(true);
    const [query, setQuery] = useState("");

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <ThemedView>
                <ThemedText style={styles.h1}>UI States Kitchen Sink</ThemedText>
                <ThemedText style={styles.p}>
                    This screen demonstrates core React Native building blocks and how a UI can
                    represent loading, error, empty, and success states.
                </ThemedText>

                {/* Small "controls" area to show inputs */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.h2}>Controls</ThemedText>

                    <ThemedText style={styles.label}>Search</ThemedText>
                    <TextInput
                        value={query}
                        onChangeText={setQuery}
                        placeholder="Type something…"
                        style={styles.input}
                    />

                    <ThemedView style={styles.row}>
                        <ThemedText style={styles.label}>Online</ThemedText>
                        <Switch value={isOnline} onValueChange={setIsOnline} />
                    </ThemedView>

                    <Pressable
                        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                        onPress={() => Alert.alert("Pressed", "Buttons should give feedback.")}
                    >
                        <ThemedText style={styles.buttonText}>Pressable Example</ThemedText>
                    </Pressable>
                </ThemedView>

                {/* LOADING */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.h2}>Loading State</ThemedText>
                    <ThemedText style={styles.p}>Use when the app is waiting for data.</ThemedText>

                    <ThemedView style={styles.center}>
                        <ActivityIndicator />
                        <ThemedText style={styles.muted}>Loading…</ThemedText>
                    </ThemedView>
                </ThemedView>

                {/* ERROR */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.h2}>Error State</ThemedText>
                    <ThemedText style={styles.p}>
                        Use when something failed. Keep it human, and offer recovery.
                    </ThemedText>

                    <ThemedView style={styles.errorBox}>
                        <ThemedText style={styles.errorTitle}>Something went wrong</ThemedText>
                        <ThemedText style={styles.errorMessage}>
                            {isOnline
                                ? "The server is having trouble. Please try again."
                                : "You appear to be offline. Check your connection."}
                        </ThemedText>

                        <Pressable
                            style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
                            onPress={() => Alert.alert("Retry", "This would re-fetch data.")}
                        >
                            <ThemedText style={styles.secondaryButtonText}>Retry</ThemedText>
                        </Pressable>
                    </ThemedView>
                </ThemedView>

                {/* EMPTY */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.h2}>Empty State</ThemedText>
                    <ThemedText style={styles.p}>
                        Use when the app is working, but there’s nothing to show.
                    </ThemedText>

                    <ThemedView style={styles.center}>
                        <ThemedText style={styles.muted}>
                            {query.trim().length > 0
                                ? `No results for “${query.trim()}”.`
                                : "Nothing here yet."}
                        </ThemedText>
                        <ThemedText style={styles.mutedSmall}>Try a different search or create a new item.</ThemedText>
                    </ThemedView>
                </ThemedView>

                {/* SUCCESS */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.h2}>Success State</ThemedText>
                    <ThemedText style={styles.p}>
                        Use when you have data. Here we show a simple “profile” card.
                    </ThemedText>

                    <ThemedView style={styles.profile}>
                        <Image
                            source={{ uri: "https://picsum.photos/100" }}
                            style={styles.avatar}
                        />
                        <ThemedView style={{ flex: 1 }}>
                            <ThemedText style={styles.profileName}>Taylor Example</ThemedText>
                            <ThemedText style={styles.mutedSmall}>Product Designer • Regina</ThemedText>

                            <ThemedView style={styles.tagsRow}>
                                <Tag label="Calm UI" />
                                <Tag label="Readable" />
                                <Tag label="Consistent" />
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>

                    <Pressable
                        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                        onPress={() => Alert.alert("Action", "Primary actions should be obvious.")}
                    >
                        <ThemedText style={styles.buttonText}>Primary Action</ThemedText>
                    </Pressable>
                </ThemedView>

                <ThemedText style={styles.footer}>
                    Next step: refactor each state card into a reusable DataPanel component.
                </ThemedText>
            </ThemedView>
        </ScrollView>
    );
}

function Tag({ label }) {
    return (
        <ThemedView style={styles.tag}>
            <ThemedText style={styles.tagText}>{label}</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    page: { flex: 1 },
    content: { padding: 16, gap: 12 },

    h1: { fontSize: 24, fontWeight: "700" },
    h2: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
    p: { fontSize: 14, opacity: 0.85, marginBottom: 10 },

    card: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 14,
        padding: 14,
        gap: 8,
    },

    label: { fontSize: 14, fontWeight: "500" },

    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },

    center: { alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 12 },
    muted: { opacity: 0.7, textAlign: "center" },
    mutedSmall: { opacity: 0.6, fontSize: 12, textAlign: "center" },

    button: {
        marginTop: 8,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
    },
    buttonPressed: { opacity: 0.7 },
    buttonText: { fontWeight: "600" },

    secondaryButton: {
        marginTop: 10,
        borderRadius: 12,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
    },
    secondaryButtonText: { fontWeight: "600", opacity: 0.85 },

    errorBox: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 12,
        padding: 12,
        gap: 6,
    },
    errorTitle: { fontSize: 16, fontWeight: "600" },
    errorMessage: { opacity: 0.85 },

    profile: { flexDirection: "row", gap: 12, alignItems: "center" },
    avatar: { width: 64, height: 64, borderRadius: 32 },

    profileName: { fontSize: 16, fontWeight: "700" },

    tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 },
    tag: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 999,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    tagText: { fontSize: 12, opacity: 0.8 },

    footer: { marginTop: 8, fontSize: 12, opacity: 0.6, textAlign: "center" },
});
