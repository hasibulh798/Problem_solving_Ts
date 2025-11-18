Blog

১.

Interfaces এবং Types এর মধ্যে কিছু পার্থক্যঃ

    	ক.
    		Interfaces: ইন্টারফেসের মাধ্যমে শুধুমাত্র অবজেক্ট টাইপ সজ্ঞায়িত করা	যায়।

    	  Type: টাইপ বিভিন্ন প্রকারের হয়৷ যেমনঃ primitive (string, number, boolean),union, intersection, tuple, object ইত্যাদি।

    	খ.
    		Interface: ইন্টারফেসকে একাধিকবার extends করা যায়। এবং এর মাধ্যমে অন্য  ইন্টারফেস থেকে প্রোপার্টি নেওয়া যায়।

    		Type: Intersection এর মাধ্যমে একাধিক টাইপকে একত্র করা যায়।
    	গ.
    		Interface: একই নামে একাধিক ইন্টারফেস তৈরী করলে Typescript  সবগুলো merge করে ফেলে।

    		Types: টাইপ অ্যালিয়াসের মাধ্যমে একই নামে একাধিক টাইপ সজ্ঞায়িত করলে error দেখাবে।

৫.

নিচে Union এবং Intersection টাইপের উদাহরন দেওয়া হলোঃ

      Union: যখন কোনো একটি ভেরিয়েবল একধিক টাইপ হতে যেকোনো একটি টাইপ ধারন করে  তখন union (|) ব্যবহার করা হয়। যেমনঃ

        type Role = {
        role: 'Admin' | 'Manager' | 'Editor'
        }

      এখানে একজন user এডমিন অথবা ম্যানেজার অথবা এডিটর হবে।

      Intersection: যখন একাধিক টাইপ একসাথে যুক্ত করতে হবে তখন intersection (&) ব্যবহার করা হয়। এইক্ষেত্রে যেই টাইপগুলো একত্র করে নতুন টাইপ তৈরী করা হয় তাদের সকল প্রোপার্টি নতুন টাইপটি ধারন করবে। যেমনঃ

        type Student =  {
            name: string,
            age: number
        }

        type Player = {
              play: 'Football' | 'Cricket'
        }

        type StudentWithPlayer = Student & Player

        এখানে StudentWithPlayer টাইপটি Student এবং Player টাইপের সকল প্রোপার্টি অর্থাৎ name, age এবং play ধারন করবে।

        const student1: StudentWithPlayer = {
          name: 'Mr X',
          age: 17,
          play: 'Football'
        }
