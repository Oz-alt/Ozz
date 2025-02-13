function showMessage() {
    const name = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');

    if (name) {
        const messages = {
            "Dominic": `Happy Valentine’s Day, Papa! ❤️

I don’t say this enough, but I’m beyond grateful to have you as my parents. Your love, kindness, and endless support mean the world to me. No matter where life takes me, I always carry your warmth and wisdom in my heart. Thank you for everything—your sacrifices, your laughter, and your unconditional love.

Today is all about celebrating love, and there’s no love greater than what you’ve given me. I hope your day is filled with joy, happiness, and maybe even a little bit of relaxation (you both deserve it!).

Love you more than words can say! 💕✨`,
            "Lio": `Happy Valentine’s Day, Papi! ❤️

I don’t say this enough, but I’m beyond grateful to have you as my parents. Your love, kindness, and endless support mean the world to me. No matter where life takes me, I always carry your warmth and wisdom in my heart. Thank you for everything—your sacrifices, your laughter, and your unconditional love.

Today is all about celebrating love, and there’s no love greater than what you’ve given me. I hope your day is filled with joy, happiness, and maybe even a little bit of relaxation (you both deserve it!).

Love you more than words can say! 💕✨`,
            "Caroline": `To My One and Only Best Friend, Happy Valentine’s Day! 💌

Hey Cardis,

If Valentine’s Day is about love, then there’s no way I’m letting this day pass without telling you how much I appreciate you. You’re not just a friend—you’re family, my safe space, my human diary, and the one person who just gets me without me having to say a word.

Life would not be the same without you. Who else would listen to my endless rants, hype me up when I doubt myself, and stay up late talking about the most random things? You’ve been there for me in ways I can’t even put into words, and I hope you know that I will always be here for you too—whether you need a shoulder to lean on, a partner in crime for spontaneous adventures, or just someone to sit in comfortable silence with.

Thank you for making life brighter, funnier, and a whole lot more meaningful. I know I don’t say this enough, but I appreciate everything about you—your kindness, your honesty, your ability to make even the worst days better. You deserve all the love, happiness, and good things this world has to offer, today and always.

So, on this Valentine’s Day, I hope you feel as loved and cherished as you truly are. Eat all the chocolate, enjoy every little moment, and remember—you’re stuck with me forever. 💕🍫

Love you always, Owwzie`,
            "Nirth": `Happy Valentine’s Day, Bro! ❤️
They say siblings are your first best friends, and I’m lucky that my first friend is someone as cool as you. No matter how much we tease and annoy each other, I know I can always count on you. You’ve always been there to protect me, guide me (sometimes with too much advice!), and remind me that I’m never alone.

Thank you for all the little things you do—like looking out for me, making me laugh when I’m down, and pretending not to care but actually caring a lot. I hope today brings you as much love and happiness as you deserve. Oh, and if you get any Valentine’s chocolate, remember… sharing is caring! 🍫😜`,
            "Willeon": `To the Best Big Brother I Have, Happy Valentine’s Day! 💖
Life would be so boring without you. Who else would tease me endlessly, give me unwanted but sometimes useful advice, and always show up when I need you most? You may not always say it, but I know you care in your own way, and I appreciate that more than I can say.

I just want to take a moment to remind you how much you’re loved—not just by me, but by everyone lucky enough to know you. You’re strong, kind, and (don’t let this go to your head) actually a pretty amazing brother. I hope today brings you joy, laughter, and maybe even a little bit of relaxation. You totally deserve it! 😆✨`,

            "Miles": `Happy Valentine’s, My Favorite Brother! 💌
Okay, technically you’re my only brother, but let’s pretend I had options—because even then, I’d still pick you. You might annoy me sometimes (okay, a lot), but I wouldn’t have it any other way. You make life more fun, and even though I don’t always say it, I truly appreciate everything you do.

From the small things—like making me laugh when I least expect it—to the big things—like always being there when I need you, you’re one of the best parts of my life. So today, I just want to remind you that you’re not just a great brother, but an amazing person. Hope your Valentine’s is filled with joy, love, and maybe some extra dessert (which you should totally share with me)!" 🍰😜`,
            "Eyi": `Bro, It’s Valentine’s Day—But Make It Chill." 😎
Look, I know we don’t do the mushy stuff, but let’s be real—good friends deserve appreciation too. You’re one of the realest people I know, and I’m lucky to have you around.

So here’s to another year of brotherhood, epic memories, and maybe even a few dumb adventures ahead. Hope today’s a good one, man. And if anyone gives you extra candy, just remember who’s always down to help you eat it!" 🍫😂`,
            "Hakeem": `"Hey, Big Bro! Happy Valentine’s! 🎉
I know we don’t always say it, but you mean a lot to me. No matter how much we bicker, joke around, or pretend not to care, at the end of the day, I know you’re always there for me. And I hope you know that I’ll always be here for you, too.

You’ve been my role model, my protector, and sometimes my biggest pain—but I wouldn’t trade you for the world. Life is better because you’re in it, and I hope today reminds you of how much you’re loved and appreciated. Wishing you a Valentine’s full of happiness, good vibes, and maybe even a little peace and quiet (because let’s be real, you probably need it)!" 😊💙`,
            "Serena": `"To My Ride-or-Die, Happy Valentine’s!😍
No matter what life throws our way, I know I can always count on you. You’re more than just a friend—you’re family. Thank you for being the person I can laugh with, cry with, and share all my crazy ideas with. I honestly don’t know what I’d do without you!

So today, I just want to remind you how special you are. I hope your Valentine’s Day is filled with love, happiness, and maybe some treats that we can enjoy together later! 🍕💖`,

            "Kaisa": `Happy Valentine’s, My Amazing Friend! 🌸
If there was an award for the best friend in the world, you’d win it, hands down. Thank you for being so kind, caring, and just overall awesome. I don’t say it enough, but I truly appreciate you and our friendship.

So today, I just want to remind you that you are loved—not just today, but every single day. I hope your Valentine’s is filled with fun, laughter, and all your favorite things! 🎉💖`,

            "Jo": `To My Best Dude, Happy Valentine’s! 💯
We may not talk about feelings much, but bro, just so you know—you’re one of the best people in my life. You’ve been there through the highs, the lows, and the questionable decisions, and I appreciate that more than you know.

Wishing you a day full of good vibes, good food, and good company. And if nobody else gives you chocolate, well… I could, but let’s not make it weird." 😆🍕`,
            "Gadis": `Happy Valentine’s Day, Bestie! ❤️
Valentine’s Day isn’t just for couples—it’s for celebrating all kinds of love, and that includes the amazing friendship we have! Thank you for always being there for me, for making me laugh, and for supporting me no matter what. Life is so much better with you in it.

I hope today brings you as much happiness as you bring into my life. You deserve all the love, joy, and maybe even a little extra chocolate (which, by the way, I wouldn’t mind helping you eat!). Love you, bestie! 💕🍫`,
            "Hilmmy": `To My Wonderful Mom, Happy Valentine’s Day! 💌

Dear Mami,

No words can truly express how much you mean to me, but today, I just want to remind you how loved and appreciated you are. You are the heart of our family, the one who gives without expecting anything in return, and the person who always knows how to make everything feel better.

Thank you for your endless love, patience, and support. For every hug, every lesson, and every sacrifice—you are my greatest blessing. I hope today brings you as much love and happiness as you give to everyone around you.

Happy Valentine’s Day, Mami! Love you always. ❤️`,
            "Aerinne": `To My Amazing Sister, Happy Valentine’s Day! 💌

Dear Sis,

Just wanted to take a moment to remind you how much you mean to me. You’re not just my sister but also my biggest supporter, my role model, and sometimes, my personal life coach (even when I don’t ask!). No matter what, I know I can always count on you.

I appreciate all the little things you do—from making me laugh to always having my back. You deserve all the love and happiness in the world today (plus unlimited chocolate, which I’d be happy to help you eat!).

Love you always! ❤️`,
            "Hakeem Ge": `Happy Valentine’s Day, Bro! 👊🏼
Valentine’s isn’t just for couples—it’s also for appreciating the real ones. And you, my friend, are one of the best. Thanks for always having my back, for the laughs, the deep talks, and the dumb jokes that somehow always make my day.

Hope today treats you well, man. Maybe you’ll even get some free chocolate (and if you do, don’t forget to share!). Stay awesome! 🍫🔥`,
"Keegan": `To My Favorite Person, Happy Valentine’s Day! 💌

Hey Kary,

Just wanted to take a sec to wish you a Happy Valentine’s Day! Today’s all about appreciating the awesome people in our lives, and of course, you popped into my mind. You just have this way of making everything more fun, bringing good vibes wherever you go, and somehow turning even the simplest moments into something special. And honestly? That’s pretty rare.

Hope your day’s filled with lots of laughs, good times, and little moments that make you smile. No pressure, no cheesy stuff—just a small reminder that you’re appreciated more than you probably realize.

Whatever you’re up to today, I hope it’s a good one. And hey, if you ever need someone to chill with, you know where to find me. 😉

Have an awesome day! ❤️`,
        };

        const message = messages[name] || `Hi ${name}, Pakai kapital awalan oke`;
        messageDiv.innerText = message;
        messageDiv.style.display = 'block';
    } else {
        alert('Please enter your name!');
    }
}